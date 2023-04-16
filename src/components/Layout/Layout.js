import { Container, Body } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Body>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster />
    </Body>
  );
};
