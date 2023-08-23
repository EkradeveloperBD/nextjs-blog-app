export default function PageLayout({
    children, // will be a page or nested layout)
}) {
    return (
        <div className='min-h-screen w-full'>
            {children}
        </div>
    )
}