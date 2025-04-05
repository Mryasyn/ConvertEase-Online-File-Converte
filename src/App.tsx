import React, { useState } from 'react';
import { Moon, Sun, FileUp, Laptop, Droplet as Dropbox, HardDrive as GoogleDrive, Cloud, Link, FileIcon, CloudIcon, ShieldCheck, ChevronDown, Settings, Code, RotateCw, X } from 'lucide-react';

interface FileSource {
  icon: React.ElementType;
  label: string;
}

const fileSources: FileSource[] = [
  { icon: Laptop, label: 'From Device' },
  { icon: Dropbox, label: 'From Dropbox' },
  { icon: GoogleDrive, label: 'From Google Drive' },
  { icon: Cloud, label: 'From OneDrive' },
  { icon: Link, label: 'From URL' }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      if (file.type.startsWith('image/')) {
        setOutputFormat('JPG');
      } else if (file.type.includes('pdf')) {
        setOutputFormat('DOCX');
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setOutputFormat('');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <header className="fixed top-0 left-0 right-0 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileUp className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">ConvertEase</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">File Converter</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Easily convert files from one format to another, online.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="relative">
              <div
                className={`border-2 border-dashed rounded-lg p-8 ${
                  isDropdownOpen ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-600'
                } transition-colors duration-200 bg-gray-50 dark:bg-gray-800`}
              >
                <div className="text-center">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="group inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FileUp className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    Choose Files
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 z-20 transition-all duration-300 ease-in-out animate-dropdown">
                      {fileSources.map(({ icon: Icon, label }) => (
                        <label
                          key={label}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 ease-in-out"
                        >
                          <Icon className="w-5 h-5 mr-3 text-indigo-600 dark:text-gray-400 transition-transform duration-200 ease-in-out hover:scale-110" />
                          <span className="text-gray-700 dark:text-gray-300">{label}</span>
                          {label === 'From Device' && (
                            <input
                              type="file"
                              className="hidden"
                              onChange={handleFileSelect}
                            />
                          )}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {selectedFile && (
              <div className="mt-6 animate-fadeIn">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileIcon className="w-5 h-5 text-indigo-600 dark:text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Output:</span>
                      <select
                        value={outputFormat}
                        onChange={(e) => setOutputFormat(e.target.value)}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded px-3 py-1 text-sm text-gray-900 dark:text-white transition-colors duration-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      >
                        <option value="JPG">JPG</option>
                        <option value="PNG">PNG</option>
                        <option value="PDF">PDF</option>
                        <option value="DOCX">DOCX</option>
                        <option value="TXT">TXT</option>
                      </select>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors duration-200">
                        <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors duration-200">
                        <Code className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button 
                        onClick={handleRemoveFile}
                        className="p-1 hover:bg-red-50 dark:hover:bg-red-900 rounded transition-colors duration-200 group"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4 text-red-500 dark:text-red-400 transition-transform duration-200 group-hover:scale-110" />
                      </button>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                  <RotateCw className="w-5 h-5 mr-2 transition-transform duration-300 hover:rotate-180" />
                  Convert Now
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FileIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Convert Any File</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Support for over 1000+ file formats
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CloudIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Works Anywhere</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert files from any device or cloud storage
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Privacy Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your files are encrypted and automatically deleted
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ConvertEase is your all-in-one file converter — supporting all file types, from documents
              to images. Upload from anywhere (Google Drive, Dropbox, OneDrive, device, or URL), choose
              your desired output format, and convert instantly.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No downloads, no complications — just fast, secure, and reliable file conversion, right
              from your browser.
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Convert any file. Anytime. Anywhere.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;