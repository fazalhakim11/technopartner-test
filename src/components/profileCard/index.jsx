import { useSelector } from "react-redux";

const ProfileCard = ({handleQRClicked}) => {
  const data = useSelector((state) => state.profile.profile);

  return (
      <div className="bg-[url('/motif.png')] p-5 bg-cover">
        {data.saldo && (
          <div className="bg-[#fff] p-3 px-3 xs:px-5 rounded-xl drop-shadow-md">
            <p>{data.greeting},</p>
            <p className="text-lg font-bold">{data.name}</p>
            <div className="flex items-center">
              <div className="bg-white rounded-full drop-shadow-lg p-2">
                <button onClick={handleQRClicked}>
                  <img src="/qrCode.svg" alt="Code" className="w-[60px]" />
                </button>
              </div>
              <div className="ms-4 ps-4 border-dotted border-l-2 border-[#e3e3e3] w-[100%]">
                <div className="flex justify-between">
                  <p>Saldo </p>
                  <p className="font-bold">
                    {data.saldo.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Points</p>
                  <p className="text-[#2adf6f] font-bold">
                    {data.point.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default ProfileCard;
