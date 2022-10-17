import { Link, Outlet } from 'react-router-dom';

export default function Default() {
  // const [location] = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location])

  return (
    <>
      <div>
        <Link to={''}>Home</Link> |
        <Link to={'tic-tac-toe'}>Tic Tac Toe</Link> |
        <Link to={'computer'}>Computer</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
