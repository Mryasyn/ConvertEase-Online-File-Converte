<<<<<<< HEAD
import React, { useState, useCallback } from 'react';
import { FileUp, Laptop, Droplet as Dropbox, HardDrive as GoogleDrive, Cloud, Link, FileIcon, CloudIcon, ShieldCheck, ChevronDown, Settings, Code, RotateCw, X, Check, Search, RefreshCw } from 'lucide-react';
=======
import React, { useState } from 'react';
import { Moon, Sun, FileUp, Laptop, Droplet as Dropbox, HardDrive as GoogleDrive, Cloud, Link, FileIcon, CloudIcon, ShieldCheck, ChevronDown, Settings, Code, RotateCw, X } from 'lucide-react';
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3

interface FileSource {
  icon: React.ElementType;
  label: string;
<<<<<<< HEAD
  action: () => void;
}

interface FormatOption {
  value: string;
  label: string;
  category: string;
  supportedTypes: string[];
}

interface ImageSettings {
  resizeMode: 'original' | 'custom' | 'percentage';
  width: number;
  height: number;
  percentage: number;
  backgroundColor: string;
  compress: boolean;
  autoOrient: boolean;
  stripMetadata: boolean;
}

const formatOptions: FormatOption[] = [
  // Document formats
  { value: 'DOC', label: 'Word Document (.doc)', category: 'Document', supportedTypes: ['application/msword', 'text/', 'application/pdf'] },
  { value: 'DOCX', label: 'Word Document (.docx)', category: 'Document', supportedTypes: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/', 'application/pdf'] },
  { value: 'PDF', label: 'PDF Document (.pdf)', category: 'Document', supportedTypes: ['application/pdf', 'text/', 'application/msword'] },
  { value: 'PS', label: 'PostScript (.ps)', category: 'Document', supportedTypes: ['application/postscript', 'application/pdf'] },
  { value: 'TEXT', label: 'Plain Text (.txt)', category: 'Document', supportedTypes: ['text/', 'application/pdf', 'application/msword'] },
  { value: 'TXT', label: 'Text File (.txt)', category: 'Document', supportedTypes: ['text/', 'application/pdf', 'application/msword'] },
  { value: 'WORD', label: 'Word Document (.doc)', category: 'Document', supportedTypes: ['application/msword', 'text/', 'application/pdf'] },
  // Image formats
  { value: 'JPG', label: 'JPEG Image (.jpg)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'PNG', label: 'PNG Image (.png)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'WEBP', label: 'WebP Image (.webp)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'BMP', label: 'Bitmap Image (.bmp)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'GIF', label: 'GIF Image (.gif)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'TIFF', label: 'TIFF Image (.tiff)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'SVG', label: 'SVG Image (.svg)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'ICO', label: 'Icon (.ico)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'EPS', label: 'EPS Image (.eps)', category: 'Image', supportedTypes: ['image/'] },
  { value: 'PSD', label: 'Photoshop (.psd)', category: 'Image', supportedTypes: ['image/'] },
];

const defaultImageSettings: ImageSettings = {
  resizeMode: 'original',
  width: 1920,
  height: 1080,
  percentage: 100,
  backgroundColor: '#FFFFFF',
  compress: false,
  autoOrient: true,
  stripMetadata: true,
};

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [conversionSuccess, setConversionSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFormatSelector, setShowFormatSelector] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [imageSettings, setImageSettings] = useState<ImageSettings>(defaultImageSettings);

  const handleDropboxSelect = () => {
    window.open('https://www.dropbox.com/choose', 'dropbox', 'width=800,height=600');
    setIsDropdownOpen(false);
  };

  const handleGoogleDriveSelect = () => {
    window.open('https://drive.google.com/drive/my-drive', 'googledrive', 'width=800,height=600');
    setIsDropdownOpen(false);
  };

  const handleOneDriveSelect = () => {
    window.open('https://onedrive.live.com', 'onedrive', 'width=800,height=600');
    setIsDropdownOpen(false);
  };

  const fileSources: FileSource[] = [
    { 
      icon: Laptop, 
      label: 'From Device',
      action: () => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()
    },
    { 
      icon: Dropbox, 
      label: 'From Dropbox',
      action: handleDropboxSelect
    },
    { 
      icon: GoogleDrive, 
      label: 'From Google Drive',
      action: handleGoogleDriveSelect
    },
    { 
      icon: Cloud, 
      label: 'From OneDrive',
      action: handleOneDriveSelect
    },
    { 
      icon: Link, 
      label: 'From URL',
      action: () => {
        const url = prompt('Enter file URL:');
        if (url) {
          console.log('Downloading from URL:', url);
        }
      }
    }
  ];

=======
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

>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
<<<<<<< HEAD
      const fileType = file.type;
      const defaultFormat = formatOptions.find(format => 
        format.supportedTypes.some(type => fileType.startsWith(type))
      );
      setOutputFormat(defaultFormat?.value || formatOptions[0].value);
      setShowFormatSelector(true);
=======
      if (file.type.startsWith('image/')) {
        setOutputFormat('JPG');
      } else if (file.type.includes('pdf')) {
        setOutputFormat('DOCX');
      }
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setOutputFormat('');
<<<<<<< HEAD
    setConversionSuccess(false);
    setShowFormatSelector(false);
    setShowSettings(false);
    setImageSettings(defaultImageSettings);
  };

  const getAvailableFormats = () => {
    if (!selectedFile) return formatOptions;
    return formatOptions.filter(format => 
      format.supportedTypes.some(type => selectedFile.type.startsWith(type))
    );
  };

  const filteredFormats = getAvailableFormats().filter(format =>
    format.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    format.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatsByCategory = filteredFormats.reduce((acc, format) => {
    if (!acc[format.category]) {
      acc[format.category] = [];
    }
    acc[format.category].push(format);
    return acc;
  }, {} as Record<string, FormatOption[]>);

  const handleSettingsChange = (key: keyof ImageSettings, value: any) => {
    setImageSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetSettings = () => {
    setImageSettings(defaultImageSettings);
  };

  const handleConvert = async () => {
    if (!selectedFile || !outputFormat) return;

    setIsConverting(true);
    setConversionSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const blob = new Blob([await selectedFile.arrayBuffer()], { type: `application/${outputFormat.toLowerCase()}` });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedFile.name.split('.')[0]}.${outputFormat.toLowerCase()}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setConversionSuccess(true);
    } catch (error) {
      console.error('Conversion failed:', error);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed top-0 left-0 right-0 border-b border-gray-700 bg-gray-800 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center space-x-2">
            <FileUp className="w-6 h-6 text-indigo-500" />
            <span className="text-xl font-bold text-white">ConvertEase</span>
          </div>
=======
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
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
<<<<<<< HEAD
          <h1 className="text-4xl font-bold mb-4 text-white">File Converter</h1>
          <p className="text-gray-300">
=======
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">File Converter</h1>
          <p className="text-gray-600 dark:text-gray-300">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
            Easily convert files from one format to another, online.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
<<<<<<< HEAD
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-700">
            <div className="relative">
              <div className={`border-2 border-dashed rounded-lg p-8 ${
                isDropdownOpen ? 'border-indigo-500' : 'border-gray-600'
              } transition-colors duration-200 bg-gray-800`}>
=======
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="relative">
              <div
                className={`border-2 border-dashed rounded-lg p-8 ${
                  isDropdownOpen ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-600'
                } transition-colors duration-200 bg-gray-50 dark:bg-gray-800`}
              >
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
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
<<<<<<< HEAD
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-20 transition-all duration-300 ease-in-out animate-dropdown">
                      {fileSources.map(({ icon: Icon, label, action }) => (
                        <button
                          key={label}
                          onClick={action}
                          className="w-full flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer transition-colors duration-200 ease-in-out"
                        >
                          <Icon className="w-5 h-5 mr-3 text-indigo-400 transition-transform duration-200 ease-in-out hover:scale-110" />
                          <span className="text-gray-300">{label}</span>
=======
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 z-20 transition-all duration-300 ease-in-out animate-dropdown">
                      {fileSources.map(({ icon: Icon, label }) => (
                        <label
                          key={label}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 ease-in-out"
                        >
                          <Icon className="w-5 h-5 mr-3 text-indigo-600 dark:text-gray-400 transition-transform duration-200 ease-in-out hover:scale-110" />
                          <span className="text-gray-700 dark:text-gray-300">{label}</span>
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                          {label === 'From Device' && (
                            <input
                              type="file"
                              className="hidden"
                              onChange={handleFileSelect}
                            />
                          )}
<<<<<<< HEAD
                        </button>
=======
                        </label>
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {selectedFile && (
              <div className="mt-6 animate-fadeIn">
<<<<<<< HEAD
                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileIcon className="w-5 h-5 text-indigo-400" />
                      <div>
                        <p className="text-sm font-medium text-white">{selectedFile.name}</p>
                        <p className="text-xs text-gray-400">
=======
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileIcon className="w-5 h-5 text-indigo-600 dark:text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                          {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
<<<<<<< HEAD
                      <button
                        onClick={() => setShowFormatSelector(!showFormatSelector)}
                        className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors duration-200"
                      >
                        <span>Output: {outputFormat}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFormatSelector ? 'rotate-180' : ''}`} />
                      </button>
                      <button 
                        onClick={() => setShowSettings(!showSettings)}
                        className="p-1 hover:bg-gray-600 rounded transition-colors duration-200"
                      >
                        <Settings className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded transition-colors duration-200">
                        <Code className="w-4 h-4 text-gray-400" />
                      </button>
                      <button 
                        onClick={handleRemoveFile}
                        className="p-1 hover:bg-red-900 rounded transition-colors duration-200 group"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4 text-red-400 transition-transform duration-200 group-hover:scale-110" />
                      </button>
                    </div>
                  </div>

                  {showFormatSelector && (
                    <div className="mt-4 bg-gray-800 rounded-lg border border-gray-600 p-4 animate-fadeIn">
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search formats..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="space-y-4">
                        {Object.entries(formatsByCategory).map(([category, formats]) => (
                          <div key={category}>
                            <h3 className="text-gray-400 text-sm font-medium mb-2">{category}</h3>
                            <div className="grid grid-cols-3 gap-2">
                              {formats.map((format) => (
                                <button
                                  key={format.value}
                                  onClick={() => {
                                    setOutputFormat(format.value);
                                    setShowFormatSelector(false);
                                  }}
                                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    outputFormat === format.value
                                      ? 'bg-indigo-600 text-white'
                                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                  }`}
                                >
                                  {format.value}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {showSettings && (
                    <div className="mt-4 bg-gray-800 rounded-lg border border-gray-600 p-4 animate-fadeIn">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-white">Advanced Options</h3>
                        <button
                          onClick={() => setShowSettings(false)}
                          className="text-gray-400 hover:text-white"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Resize Output Image
                          </label>
                          <select
                            value={imageSettings.resizeMode}
                            onChange={(e) => handleSettingsChange('resizeMode', e.target.value)}
                            className="w-full bg-gray-700 text-white rounded-lg border border-gray-600 p-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          >
                            <option value="original">Keep original size</option>
                            <option value="custom">Custom dimensions</option>
                            <option value="percentage">Percentage</option>
                          </select>

                          {imageSettings.resizeMode === 'custom' && (
                            <div className="grid grid-cols-2 gap-4 mt-2">
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                  Width (px)
                                </label>
                                <input
                                  type="number"
                                  min="1"
                                  max="50000"
                                  value={imageSettings.width}
                                  onChange={(e) => handleSettingsChange('width', parseInt(e.target.value))}
                                  className="w-full bg-gray-700 text-white rounded-lg border border-gray-600 p-2"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                  Height (px)
                                </label>
                                <input
                                  type="number"
                                  min="1"
                                  max="50000"
                                  value={imageSettings.height}
                                  onChange={(e) => handleSettingsChange('height', parseInt(e.target.value))}
                                  className="w-full bg-gray-700 text-white rounded-lg border border-gray-600 p-2"
                                />
                              </div>
                            </div>
                          )}

                          {imageSettings.resizeMode === 'percentage' && (
                            <div className="mt-2">
                              <label className="block text-sm font-medium text-gray-300 mb-1">
                                Scale (%)
                              </label>
                              <input
                                type="number"
                                min="1"
                                max="10000"
                                value={imageSettings.percentage}
                                onChange={(e) => handleSettingsChange('percentage', parseInt(e.target.value))}
                                className="w-full bg-gray-700 text-white rounded-lg border border-gray-600 p-2"
                              />
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Background Color
                          </label>
                          <div className="flex space-x-2">
                            <input
                              type="color"
                              value={imageSettings.backgroundColor}
                              onChange={(e) => handleSettingsChange('backgroundColor', e.target.value)}
                              className="h-10 w-10 rounded border border-gray-600"
                            />
                            <input
                              type="text"
                              value={imageSettings.backgroundColor}
                              onChange={(e) => handleSettingsChange('backgroundColor', e.target.value)}
                              className="flex-1 bg-gray-700 text-white rounded-lg border border-gray-600 p-2"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={imageSettings.autoOrient}
                              onChange={(e) => handleSettingsChange('autoOrient', e.target.checked)}
                              className="rounded border-gray-600 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-sm text-gray-300">Auto-orient image</span>
                          </label>

                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={imageSettings.stripMetadata}
                              onChange={(e) => handleSettingsChange('stripMetadata', e.target.checked)}
                              className="rounded border-gray-600 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-sm text-gray-300">Strip metadata</span>
                          </label>

                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={imageSettings.compress}
                              onChange={(e) => handleSettingsChange('compress', e.target.checked)}
                              className="rounded border-gray-600 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-sm text-gray-300">Compress output image</span>
                          </label>
                        </div>

                        <div className="flex justify-between pt-4 border-t border-gray-600">
                          <button
                            onClick={resetSettings}
                            className="flex items-center space-x-2 text-gray-400 hover:text-white"
                          >
                            <RefreshCw className="w-4 h-4" />
                            <span>Reset all options</span>
                          </button>
                          <button
                            onClick={() => setShowSettings(false)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            Apply Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleConvert}
                  disabled={isConverting}
                  className={`w-full mt-4 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center ${
                    conversionSuccess
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white ${isConverting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isConverting ? (
                    <RotateCw className="w-5 h-5 mr-2 animate-spin" />
                  ) : conversionSuccess ? (
                    <Check className="w-5 h-5 mr-2" />
                  ) : (
                    <RotateCw className="w-5 h-5 mr-2" />
                  )}
                  {isConverting ? 'Converting...' : conversionSuccess ? 'Converted!' : 'Convert Now'}
=======
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
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
<<<<<<< HEAD
                <FileIcon className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Convert Any File</h3>
              <p className="text-gray-400">
=======
                <FileIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Convert Any File</h3>
              <p className="text-gray-600 dark:text-gray-400">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                Support for over 1000+ file formats
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
<<<<<<< HEAD
                <CloudIcon className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Works Anywhere</h3>
              <p className="text-gray-400">
=======
                <CloudIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Works Anywhere</h3>
              <p className="text-gray-600 dark:text-gray-400">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                Convert files from any device or cloud storage
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
<<<<<<< HEAD
                <ShieldCheck className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Privacy Guaranteed</h3>
              <p className="text-gray-400">
=======
                <ShieldCheck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Privacy Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-400">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
                Your files are encrypted and automatically deleted
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
<<<<<<< HEAD
            <p className="text-gray-400 mb-4">
=======
            <p className="text-gray-600 dark:text-gray-400 mb-4">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
              ConvertEase is your all-in-one file converter — supporting all file types, from documents
              to images. Upload from anywhere (Google Drive, Dropbox, OneDrive, device, or URL), choose
              your desired output format, and convert instantly.
            </p>
<<<<<<< HEAD
            <p className="text-gray-400 mb-4">
              No downloads, no complications — just fast, secure, and reliable file conversion, right
              from your browser.
            </p>
            <p className="text-lg font-semibold text-white">
=======
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No downloads, no complications — just fast, secure, and reliable file conversion, right
              from your browser.
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
>>>>>>> d6bd92ec5bc37ec84ce6f4ae1dbb62c498dc77a3
              Convert any file. Anytime. Anywhere.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;