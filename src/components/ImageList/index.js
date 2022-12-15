import React from "react";
import { Box, ImageList as ImageListMaterial, ImageListItem, CircularProgress } from '@mui/material'
import InfiniteScroll from "react-infinite-scroll-component";

const ImageList = ({ photos, setPage, currentPage }) => {

    return (
        <Box
            id="scrollableDiv"
            component='div'
        >
                <InfiniteScroll
                    dataLength={photos.length}
                    next={() => setPage(currentPage + 1)}
                    hasMore={true}
                    loader={<CircularProgress />}
                    scrollableTarget= "scrolableDiv"
                >
                    <ImageListMaterial sx={{ overflow: 'hidden' }} variant="woven" cols={3} gap={8}>
                    {photos.map((item, id) => (
                        <ImageListItem key={`${item.id}-${id}`}>
                            <img
                                src={item.urls.raw}
                                alt={item.alt_description}
                                style={{ minHeight: 10 }}
                                loading="lazy"
                            />
                        </ImageListItem>

                    ))}
                    </ImageListMaterial>
                </InfiniteScroll>
        </Box>
    )
}

export default ImageList
