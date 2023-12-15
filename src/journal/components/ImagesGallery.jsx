import { Box, ImageList, ImageListItem, styled } from "@mui/material"
import { useJournalStore } from "../../hooks"

const ImageListItemWithStyle = styled(ImageListItem)`
${({ theme }) => `
transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
&:hover {
  cursor: pointer;
  opacity:0.8;
}
`}
`;

export const ImagesGallery = ({images}) => {

  
const { startActiveImg}=useJournalStore();
  const handleViewImg=(img)=>{
   startActiveImg(img);
  }

 
  return (
    <Box
      sx={{ width: '100%', maxHeight: '250px', overflowY: 'auto' }}>
    <ImageList variant="masonry" cols={3} gap={8} >
      {images.map((image) => (
        <ImageListItemWithStyle key={image}>
          <img
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=248&fit=crop&auto=format`}
            alt="Imagen de la nota"

            loading="lazy"
             onClick={()=>handleViewImg(image)}
          />
        </ImageListItemWithStyle>
      ))}
    </ImageList>

  </Box>


  )
}

