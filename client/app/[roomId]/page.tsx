import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import DrawingCanvas from '@/components/DrawingCanvas'

export default function RoomPage() {
  return (
    <>
      <Header />

      <div className='h-[calc(100vh-3.8rem)] md:grid md:grid-cols-[minmax(0,1fr)_15.5rem]'>
        <main className='h-full'>
          <DrawingCanvas />
        </main>

        <Sidebar />
      </div>
    </>
  )
}