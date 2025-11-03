import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const INIT_URL = {
        rainy : "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
        sunny : "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=775",
        cold : "https://images.unsplash.com/photo-1668418321923-becc3ef20077?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    };
    return(
        <div className="InfoBox">
            <div className='CardContainer'>
            <Card sx={{ width: 445 }}>
            <CardMedia
                component="img"
                alt="some weather image"
                height="140"
                image={info.precipitation>=0.1?INIT_URL.rainy:(info.temp>15?INIT_URL.sunny:INIT_URL.cold)}
                title='rainy weather'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}-<i>({info.text})</i>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                <div>Temperature : {info.temp}&deg;C</div>
                <div>Feels like {info.feelsLike}&deg;C</div>
                <div>Humidity : {info.humidity}</div>
                <div>Wind Speed: {info.windSpeed}kph</div>
                <div>Precipation: {info.precipitation}</div>
                <div>Last Updated: {info.lastUpdated}</div>
                </Typography>
            </CardContent>
            </Card>
            </div>
            </div>
    )
}