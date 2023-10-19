import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
