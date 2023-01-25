import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import ContactsPage from 'pages/ContacsPage/ContactsPage';
// import { fetchContacts } from 'redux/contacts/contacts.thunk';

import css from '../components/App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

export const App = () => {
  const userData = useSelector(state => state.user.userData);

  return (
    // <div className={css.styleApp}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>

    <>
      <div>
        <header className={css.header}>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
            >
              Home
            </NavLink>
            {userData === null ? null : (
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
              >
                Contacts
              </NavLink>
            )}

            {userData !== null ? null : (
              <NavLink
                to="/registerPage"
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
              >
                RegisterPage
              </NavLink>
            )}

            {userData !== null ? null : (
              <NavLink
                to="/loginPage"
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
              >
                LoginPage
              </NavLink>
            )}
          </nav>
        </header>
        <div>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/registerPage" element={<RegisterPage />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};
