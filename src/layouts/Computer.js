import { Outlet } from 'react-router-dom';

export default function Computer() {
  return (
    <>
      <div>
        <h2>{'Computer Parts'}</h2>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
