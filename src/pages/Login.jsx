import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 전체 화면을 감싸는 섹션 (화면 정중앙 정렬)
const Section = styled.section`
    display: flex; /* 오타 수정: felx -> flex */
    justify-content: center;
    align-items: center;
    height: 100vh; /* 화면 전체 높이 사용 */
    
    background-color: #f5f5f5; /* 배경색 추가 (선택사항) */
`;

const CardContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 40px 20px; /* 내부 여백 조정 */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    width: 400px; /* 가로 너비 조정 (600px은 로그인창 치고 넓을 수 있음) */
    /* height: 500px; -> 콘텐츠 내용에 따라 늘어나도록 제거하거나 min-height 사용 추천 */
    background-color: white;
    
    display: flex;
    flex-direction: column; /* 세로 정렬 필수 */
    align-items: center; /* 가로축 중앙 정렬 */
    gap: 10px; /* 요소 사이 간격 */
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
`;

const Label = styled.p`
    width: 100%; /* 라벨은 왼쪽 정렬을 위해 너비 100% */
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 5px;
    padding-left: 10%; /* 인풋창과 라인 맞추기 */
`;

const Input = styled.input`
    width: 80%; /* 부모 컨테이너 기준 80% */
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    border: 2px solid #D7D7D7;
    border-radius: 5px;
    outline: none;
    
    &:focus {
        border-color: #FE8445; /* 포커스 시 색상 변경 */
    }
`;

// 로그인 버튼 스타일 추가
const Button = styled.button`
    width: 85%;
    height: 45px;
    margin-top: 20px;
    background-color: #ffffff;
    border: 2px solid #FE8445; /* border-width + color + style 통합 */
    color: #FE8445;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover {
        background-color: #FE8445;
        color: white;
    }
`;


const SignUpLink = styled.span`
    margin-top: 15px;
    font-size: 0.85rem;
    color: #666;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: #FE8445;
    }
`;

export default function Login() {
    const navigate = useNavigate(); // 페이지 이동 훅 사용

    const handleLogin = () => {
        alert("로그인 버튼 클릭!");
        // 여기에 로그인 로직 추가
    };

    const goToSignUp = () => {
        navigate('/signup'); // 회원가입 경로로 이동
    };

    return (
        <Section>
            <CardContainer>
                <CardTitle>로그인</CardTitle>
                
                <Label>이메일</Label>
                <Input type="email" placeholder='학교 이메일 입력' />
                
                <Label>비밀번호</Label>
                <Input type="password" placeholder='비밀번호 입력' />
                
                <Button onClick={handleLogin}>로그인</Button>

                <p style={{ fontSize: '0.8rem', marginTop: '20px', color: '#888' }}>
                    아직 회원이 아니라면?
                </p>
                <SignUpLink onClick={goToSignUp}>회원가입 하러가기</SignUpLink>
            </CardContainer>
        </Section>
    );
}