const QrCode = ({ image, clickQR }) => {
  return (
    <div className="absolute z-10 bg-white h-[100vh] w-[100%] flex flex-col items-center p-3">
      <button onClick={clickQR} className="pt-5 self-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <p>Show the QR Code below to the cashier</p>
      <img src={image} alt="Qr Code" />
    </div>
  );
};

export default QrCode;
