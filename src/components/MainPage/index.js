import React, { useEffect, useState } from "react";
import ImageModal from '../ImageModal/index'
import ImageList from '../ImageList'
import { fetchData } from "../../utils/fetchData";
import './MainPage.css'

const MainPage = () => {
    const [isModalOpen, toggleIsModalOpen] = useState(false)
    const [photos, setPhotos] = useState([])
    const [currentPage, setPage] = useState(1)

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
                photos={photos}
                currentPage={currentPage}
                setPage={setPage}
            />
            {isModalOpen && <ImageModal/>}
        </div>
  );
}

export default MainPage;
