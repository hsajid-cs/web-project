import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
 import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
 import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DonorCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer>
       {Array.from({ length: 6 }).map((_, index) => ( 
        <Card
           key={index}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            width: '100%',
          }}
        >
          <CardHeader
            title="Story Title"
            subheader="Donor Name"
           
          />
          <CardMedia
            component="img"
            height="194"
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Description
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Details:</Typography>
              <Typography paragraph>
               blah blah blah
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
       
      )) 
       } 
    </CardContainer>
  );
};

export default DonorCard;