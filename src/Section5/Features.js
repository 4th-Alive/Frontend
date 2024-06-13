import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Input } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { Checkbox } from 'antd';
import { Divider } from 'antd';

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};
const { TextArea } = Input;

const items = [
    {
        icon: <MenuBookIcon />,
        title: '오늘의 일기장',
        description: '오늘 하루의 기분과 있었던 일을 기록해요',
        imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    },
    {
        icon: <QuestionAnswerIcon />,
        title: 'Q & A',
        description: '가족들을 더욱 깊이 알아갈 수 있는 질문으로 서로의 생각을 공유해요',
        imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    },
    {
        icon: <EmojiEventsIcon />,
        title: '미션 & 리워드',
        description: '매일 주어지는 일일미션을 수행하고 보상을 받아요',
        imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    },
];

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const [isDiarySelected, setisDiarySelected] = React.useState(false);
    const [isQASelected, setisQASelected] = React.useState(false);
    const [isMissionSelected, setisMissionSelected] = React.useState(false);
    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
        if (index == 0) {
            setisDiarySelected(true);
            setisQASelected(false);
            setisMissionSelected(false);
            console.log(isDiarySelected);
        } else if (index == 1) {
            setisQASelected(true);
            setisDiarySelected(false);
            setisMissionSelected(false);
            console.log(isQASelected);
        } else if (index == 2) {
            setisMissionSelected(true);
            setisDiarySelected(false);
            setisQASelected(false);
            console.log(isMissionSelected);
        }
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const fontStyle = {
        fontFamily: 'NotoSansKR',
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{ py: { xs: 8, sm: 16 } }} style={{ marginTop: '100px' }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography
                            component="h2"
                            variant="h4"
                            color="text.primary"
                            style={{ fontFamily: '경기천년바탕_Bold' }}
                        >
                            기능 체험해보기
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: { xs: 2, sm: 4 } }}
                            style={fontStyle}
                        >
                            함께해요: With 앱의 기능을 체험해볼 수 있는 공간입니다. <br /> 작성한 데이터는 저장되지
                            않으니 안심하세요.
                        </Typography>
                    </div>

                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
                    >
                        {items.map(({ icon, title, description }, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'primary.light' : 'grey.200';
                                        }
                                        return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        alignItems: { md: 'center' },
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (theme.palette.mode === 'light') {
                                                    return selectedItemIndex === index ? 'primary.main' : 'grey.300';
                                                }
                                                return selectedItemIndex === index ? 'primary.main' : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <Box sx={{ textTransform: 'none' }}>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            style={fontStyle}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 0.5 }}
                                            style={fontStyle}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': { transition: '0.2s' },
                                                '&:hover > svg': { transform: 'translateX(2px)' },
                                            }}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <span style={fontStyle}>더 알아보기</span>
                                            <ChevronRightRoundedIcon fontSize="small" sx={{ mt: '1px', ml: '2px' }} />
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}>
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        <Box
                            sx={{
                                m: 'auto',
                                width: 420,
                                height: 500,
                                backgroundSize: 'contain',
                            }}
                        >
                            {isDiarySelected && (
                                <div style={fontStyle}>
                                    <h2 style={{ fontFamily: '경기천년바탕_BOLD', marginTop: '10px' }}>
                                        오늘의 일기장
                                    </h2>
                                    <Rate
                                        defaultValue={3}
                                        character={({ index = 0 }) => customIcons[index + 1]}
                                        style={{ marginBottom: '20px' }}
                                    />

                                    <TextArea rows={15} style={{ marginBottom: '10px', resize: 'none' }} />

                                    <Button variant="outlined" style={{ float: 'right' }}>
                                        작성하기
                                    </Button>
                                </div>
                            )}
                            {isQASelected && (
                                <div style={fontStyle}>
                                    <h2 style={{ fontFamily: '경기천년바탕_BOLD', marginTop: '10px' }}>오늘의 질문</h2>
                                    <Divider />
                                    <h6>Q. 가족의 사랑을 느낀 적이 있나요? 있다면 언제인가요?</h6>
                                    <p>A.</p>
                                    <TextArea rows={5} style={{ marginBottom: '10px', resize: 'none' }} />
                                    <Button variant="outlined" style={{ float: 'right' }}>
                                        작성하기
                                    </Button>
                                </div>
                            )}
                            {isMissionSelected && (
                                <div style={{ fontFamily: '경기천년바탕_BOLD' }}>
                                    <h2 style={{ marginTop: '10px' }}>오늘의 일일미션</h2>
                                    <Divider />
                                    <Checkbox style={fontStyle} onChange={onChange}>
                                        변신 1회 하기
                                    </Checkbox>
                                    <br />
                                    <Checkbox style={fontStyle} onChange={onChange}>
                                        체력 회복 포션 사용하기
                                    </Checkbox>
                                    <br />
                                    <Checkbox style={fontStyle} onChange={onChange}>
                                        장비 강화 성공하기
                                    </Checkbox>
                                    <br />
                                    <Checkbox style={fontStyle} onChange={onChange}>
                                        캐릭터 레벨 올리기
                                    </Checkbox>
                                    <br />
                                </div>
                            )}
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
