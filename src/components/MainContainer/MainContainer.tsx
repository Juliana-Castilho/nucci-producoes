import Header from '../Header/Header';

export default function MainContainer({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
