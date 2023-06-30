import '@testing-library/jest-dom';

const matchMediaMock = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});

window.matchMedia = window.matchMedia || matchMediaMock;

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>,
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    locale: 'pt',
  })),
}));

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);
