import React from 'react';
import { Hotel, User, LogOut, Moon, Sun, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { toggleDarkMode } from '../store/slices/themeSlice';

export function Header() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLogout = () => {
        dispatch(logout());
    };

    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            dispatch(toggleDarkMode()); // Ensure Redux state matches
        }
    }, [dispatch]);

    const handleThemeToggle = () => {
        const htmlElement = document.documentElement;
        if (darkMode) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        dispatch(toggleDarkMode());
    };

    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Hotel className="h-8 w-8 text-primary-600" />
                        <h1 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Okin Villa</h1>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home"
                           className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Home</a>
                        <a href="#room"
                           className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Rooms</a>
                        <a href="#gallery"
                           className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Gallery</a>
                        <a href="#contact"
                           className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Contact</a>

                        <button
                            onClick={handleThemeToggle}
                            className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                        >
                            {darkMode ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
                        </button>

                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <User className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2"/>
                                    <span className="text-gray-700 dark:text-gray-300">{user?.name}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                                >
                                    <LogOut className="h-5 w-5 mr-1"/>
                                    <span>Logout</span>
                                </button>
                            </div>
                        ) : (
                            <a
                                href="/login"
                                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                            >
                                Login
                            </a>
                        )}
                    </nav>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-4">
                            <a href="#rooms" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Rooms</a>
                            <a href="#gallery" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Gallery</a>
                            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500">Contact</a>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={handleThemeToggle}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                                >
                                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                </button>

                                {isAuthenticated ? (
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <User className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                                            <span className="text-gray-700 dark:text-gray-300">{user?.name}</span>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
                                        >
                                            <LogOut className="h-5 w-5 mr-1" />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                ) : (
                                    <a
                                        href="/login"
                                        className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                                    >
                                        Login
                                    </a>
                                )}
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}