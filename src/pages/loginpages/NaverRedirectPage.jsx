import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getNaverMemberWithAccessToken, sendAuthCode} from "../../api/loginapi/naverAPI.js";
import employerStore from "../../stores/employerStore.js";

function NaverRedirectPage() {

    const [searchParams] = useSearchParams();
    const authCode = searchParams.get("code")

    const navigate = useNavigate();

    const setEno = employerStore(state => state.setEno);
    const setEemail = employerStore(state => state.setEemail);
    const setEname = employerStore(state => state.setEname);
    const setAccessToken = employerStore(state => state.setAccessToken);
    const setRefreshToken = employerStore(state => state.setRefreshToken);

    useEffect(() => {
        sendAuthCode(authCode).then(accessToken=>{
            console.log(accessToken)
            getNaverMemberWithAccessToken(accessToken.data).then((member) => {
                setEno(member.data.eno);
                setEemail(member.data.eemail);
                setEname(member.data.ename);
                setAccessToken(member.data.accessToken);
                setRefreshToken(member.data.refreshToken);

                if(member.data.isNew === false) {
                    navigate("/partTimer/calendar")
                } else {
                    navigate("/employerRegister/select");
                }
            })
        });
    })

    return (
        <>
            naver redirect page
        </>
    );
}

export default NaverRedirectPage;