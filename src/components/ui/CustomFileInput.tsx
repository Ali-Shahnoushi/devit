import { useRef, useState } from 'react'

interface CustomFileInputProps {
    onFileSelect: (file: File | null) => void
}

export default function CustomFileInput({ onFileSelect }: CustomFileInputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [fileName, setFileName] = useState('فایلی انتخاب نشده است')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setFileName(file ? file.name : 'فایلی انتخاب نشده است')
        onFileSelect(file) // <-- pass selected file to parent
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="file-input file-input-primary flex items-center gap-2">
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
            >
                انتخاب فایل
            </button>
            <span className="text-sm">{fileName}</span>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    )
}
