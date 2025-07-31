
const NoInternet = () => {
  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">No Internet Connection</h1>
        <p className="text-lg">Please check your network and try again.</p>
      </div>
    </div>
  );
};

export default NoInternet;
