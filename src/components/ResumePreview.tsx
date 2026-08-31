import { useEffect, useRef, useState, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { MdChevronLeft, MdChevronRight, MdPictureAsPdf } from "react-icons/md";
import "./styles/ResumePreview.css";

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface Props {
  pdfUrl?: string;
}

export const ResumePreview = ({ pdfUrl = "/cv/ashish-kumar-cv.pdf" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [renderError, setRenderError] = useState<boolean>(false);
  const renderTaskRef = useRef<any>(null);

  // Load the PDF document
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setRenderError(false);

    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise
      .then((doc) => {
        if (isMounted) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("PDF loading error:", err);
        if (isMounted) {
          setRenderError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
      loadingTask.destroy();
    };
  }, [pdfUrl]);

  // Render current page onto canvas
  const renderPage = useCallback(
    async (pageNumber: number) => {
      if (!pdfDoc || !canvasRef.current || !containerRef.current) return;

      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const page = await pdfDoc.getPage(pageNumber);
        const containerWidth = containerRef.current.clientWidth - 32;
        const unscaledViewport = page.getViewport({ scale: 1 });

        // Target width to fit container nicely (max ~850px)
        const targetWidth = Math.min(containerWidth, 850);
        const scale = targetWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Use 2x device pixel ratio for super-sharp retina text
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = viewport.width * dpr;
        canvas.height = viewport.height * dpr;
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        context.scale(dpr, dpr);

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== "RenderingCancelledException") {
          console.error("Page render error:", err);
        }
      }
    },
    [pdfDoc]
  );

  useEffect(() => {
    if (pdfDoc) {
      renderPage(pageNum);
    }
  }, [pdfDoc, pageNum, renderPage]);

  // Handle responsive resizing
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (pdfDoc) {
          renderPage(pageNum);
        }
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [pdfDoc, pageNum, renderPage]);

  const handlePrevPage = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNum < numPages) {
      setPageNum((prev) => prev + 1);
    }
  };

  return (
    <div className="resume-preview-wrapper" ref={containerRef}>
      {/* Header Toolbar */}
      <div className="resume-toolbar">
        <div className="resume-doc-title">
          <MdPictureAsPdf style={{ color: "var(--accentColor)", fontSize: "18px" }} />
          <span>Ashish_Kumar_CV.pdf</span>
          <span className="resume-doc-badge">Official</span>
        </div>

        {numPages > 1 && (
          <div className="resume-pagination">
            <button
              className="resume-page-btn"
              onClick={handlePrevPage}
              disabled={pageNum <= 1}
              aria-label="Previous Page"
              data-cursor="disable"
            >
              <MdChevronLeft />
            </button>
            <span className="resume-page-counter">
              Page {pageNum} / {numPages}
            </span>
            <button
              className="resume-page-btn"
              onClick={handleNextPage}
              disabled={pageNum >= numPages}
              aria-label="Next Page"
              data-cursor="disable"
            >
              <MdChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Interactive Sharp PDF Canvas Area */}
      <div className="resume-canvas-container">
        {isLoading && (
          <div className="resume-loading-skeleton">
            <div className="resume-spinner"></div>
            <span>Rendering CV preview...</span>
          </div>
        )}

        {renderError ? (
          <div style={{ color: "rgba(255,255,255,0.7)", padding: "40px 20px", textAlign: "center" }}>
            <p>PDF preview could not be loaded directly.</p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accentColor)", textDecoration: "underline" }}
            >
              Click here to view the PDF
            </a>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="resume-canvas"
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
