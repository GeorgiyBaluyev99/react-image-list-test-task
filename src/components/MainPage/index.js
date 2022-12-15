import React, { useEffect, useState } from 'react'
import ImageModal from '../ImageModal/index'
import ImageList from '../ImageList'
import { fetchData } from '../../utils/fetchData'
import './MainPage.css'

const MainPage = () => {
    const [isModalOpen, toggleIsModalOpen] = useState(false)
    const [photos, setPhotos] = useState([])
    const [currentPage, setPage] = useState(1)
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleOpenModal = (id) => {
        toggleIsModalOpen(true)
        setCurrentSlide(id)
    }

    const handleChangeSlide = (id) => {
        if (id >= photos.length - 1) {
            setPage(currentPage + 1)
        }
        setCurrentSlide(id)
    }

    const fetchMore = async (page = 1) => {
        const data = await fetchData(page)
        setPhotos([...photos, ...data])
    }

    useEffect(() => {
        fetchMore(currentPage)
    }, [currentPage])

  return (
        <div className='main-page_wrapper'>
            <ImageList
                toggleIsModalOpen={handleOpenModal}
                photos={photos}
                currentPage={currentPage}
                setPage={setPage}
            />
            {isModalOpen && (
                <ImageModal
                    onClose={() => toggleIsModalOpen(false)}
                    open={isModalOpen}
                    handleChangeSlide={handleChangeSlide}
                    currentSlide={currentSlide}
                    slide={photos[currentSlide]}
                />
            )
            }
        </div>
  );
}

export default MainPage;
