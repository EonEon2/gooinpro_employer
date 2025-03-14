import employerStore from "../../stores/employerStore.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const useEmployerStore = employerStore;


function MainListComponent() {

    const eno = useEmployerStore(state => state.eno);

    const ename = useEmployerStore(state => state.ename);
    const navigate = useNavigate(); // useNavigate 훅 사용하여 라우팅 기능 추가

    const handleChatWithAdmin = () => {
        navigate(`/chat/admin`); // roomId를 기반으로 채팅방 이동
    };

    const handleClickMyPage = () => {
        navigate(`/employer/read/${eno}`)
    }

    const handleClickRegister = () => {
        navigate("/jobposting/register");
    };

    const handleClickNearby = () => {
        navigate("/map/search");
    };

    const handleClickMyPosts = () => {
        navigate("/jobposting/list");
    };

    const handleClickMyPartTimer = () => {

        navigate(`/partTimer/list/${eno}`)
    }

    useEffect(() => {

    },[ename])

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-6 space-y-6 mt-10">

            <div>안녕하세요 {ename}</div>

            <div className="flex justify-end w-full">
                <button
                    onClick={handleClickRegister}
                    className="w-40 h-10 rounded-xl bg-blue-300 hover:bg-blue-400 text-white font-semibold">
                    공고 등록
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3 w-full">
                {/* 주변 근로 공고 보기 */}
                <div className="flex items-center justify-center">
                    <button onClick={handleClickNearby} className="w-40 h-40 rounded-xl bg-blue-300 hover:bg-blue-400 text-white font-semibold">
                        주변 근로 공고 보기
                    </button>
                </div>

                {/* 내 공고 */}
                <div className="flex items-center justify-center">
                    <button onClick={handleClickMyPosts} className="w-40 h-40 rounded-xl bg-blue-300 hover:bg-blue-400 text-white font-semibold">
                        내 공고
                    </button>
                </div>

                {/* 내 직원 */}
                <div className="flex items-center justify-center">
                    <button className="w-40 h-40 rounded-xl bg-blue-300 hover:bg-blue-400 text-white font-semibold"
                    onClick={handleClickMyPartTimer}>
                        내 직원
                    </button>
                </div>

                {/* 마이페이지 */}
                <div className="flex items-center justify-center">
                    <button className="w-40 h-40 rounded-xl bg-blue-300 hover:bg-blue-400 text-white font-semibold"
                    onClick={handleClickMyPage}>
                        마이페이지
                    </button>
                </div>

                {/* admin과 채팅하기 버튼 */}
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleChatWithAdmin} // 클릭 시 채팅방으로 이동
                        className="w-40 h-40 rounded-xl bg-blue-300 hover:bg-blue-400 text-white font-semibold"
                    >
                        관리자와 채팅하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainListComponent;
