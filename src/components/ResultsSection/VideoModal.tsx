import { motion } from "framer-motion";

function VideoModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <motion.div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={"fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] rounded-lg dark:bg-gray-800 z-[1000] ".concat(
        showModal ? "block" : "hidden"
      )}
      animate={
        showModal
          ? { opacity: 1, scale: 1, display: "block" }
          : { opacity: 0, scale: 0.5, display: "none" }
      }
      transition={{ duration: 0.3 }}
    >
      <div className="relative p-4 max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Digital currency leads at market in the right amount.
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 min-w-[660px] min-h-[400px]">
            {showModal && (
              <iframe
                width="660"
                height="400"
                src="https://www.youtube.com/embed/QPMkYyM2Gzg?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default VideoModal;
