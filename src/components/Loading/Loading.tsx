import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ReactLoading type="spin" color="#02274F" height={100} width={50} />
    </div>
  );
};

export default Loading;
