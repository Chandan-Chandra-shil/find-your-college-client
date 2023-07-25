import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center  items-center h-[100vh]">
      <SyncLoader color="#36d646" />
    </div>
  );
};

export default Loader;
