

export function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Okin Villa</h3>
                        <p className="text-gray-400">
                            Experience luxury and comfort in our carefully curated selection
                            of rooms and suites.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">Email: info@okinvilla.com</p>
                        <p className="text-gray-400">Phone: +94 71 362 75695</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Location</h3>
                        <p className="text-gray-400">Okin Rose Villa</p>
                        <p className="text-gray-400">Matara, Marissa, PC 12345</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
