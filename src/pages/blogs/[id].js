import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import { Container, Typography,Box } from '@mui/material';
import { useRouter } from 'next/router';

const DynamicPage = ({getData}) => {
  const router = useRouter();
  // const { blogsId } = router.query;
  // const passedData = router.query.items ? JSON.parse(router.query.items) : null;
  

  return (
    <>
    <NavBar/>
    <Box sx={{paddingTop:'8rem',minHeight:'100vh'}}>
    <Container maxWidth='md'>
      <Box sx={{padding:{xs:'1',sm:'2'},color:'whitesmoke'}}>
        <Typography variant='h6' gutterBottom>ID: {getData?.id}</Typography>
        <br/>

        <Typography variant='h4' gutterBottom>{getData?.title}</Typography>
        <Typography variant='h5' gutterBottom>{getData?.body}</Typography>
        <br/>
        <Typography variant='body1' gutterBottom>Tags: {getData?.tags[0]} , {getData?.tags[1]} ,{getData?.tags[2]}</Typography>
        <Typography variant='h6' gutterBottom>UserId: {getData?.userId}</Typography>
        <Typography variant='h5' gutterBottom>Reactions: {getData?.reactions}</Typography>
      </Box>
    </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default DynamicPage;

export const getStaticPaths= async()=>{
  const apiUrl = 'https://dummyjson.com/posts';
  const res = await fetch(apiUrl);
  const data = await res.json();
  const paths=data.posts.map(item=>{
    return{
      params:{id: item.id.toString()},
    }
  })
return{
  paths,
  fallback:false,
}
}

export const getStaticProps=async(context)=>{
  const slug=context.params.id;
  const apiUrl = 'https://dummyjson.com/posts';
  const res = await fetch(apiUrl);
  const data = await res.json();

  const getData=data.posts.filter(item=>item.id==slug)[0]
  return{
    props:{
      getData,
    },
  }

}