import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { Masonry } from '@mui/lab'
import InfiniteScroll from 'react-infinite-scroll-component'
import useWindowDimensions from '../../hooks/useDimensions'
import './ImageList.css'

const ImageList = ({ photos, setPage, currentPage, toggleIsModalOpen }) => {
    const { width } = useWindowDimensions()

    const columns = width > 400 ? 3 : 1

    return (
        <Box
            id='scrollableDiv'
            component='div'
        >
            <InfiniteScroll
                dataLength={photos.length}
                next={() => setPage(currentPage + 1)}
                hasMore={true}
                loader={<CircularProgress />}
                scrollableTarget= 'scrolableDiv'
            >
                <Masonry columns={columns} gap={8}>
                    {photos.map((item, id) => (
                        <img
                            onClick={() => toggleIsModalOpen(id)}
                            key={`${item.id}-${id}`}
                            className='image'
                            src={item.urls.raw}
                            alt={item.alt_description}
                            loading='lazy'
                        />

                    ))}
                </Masonry>
            </InfiniteScroll>
        </Box>
    )
}

export default ImageList
