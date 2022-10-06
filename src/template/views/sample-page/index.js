// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'template/ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            72기 리액트 프로젝트
        </Typography>
    </MainCard>
);

export default SamplePage;
