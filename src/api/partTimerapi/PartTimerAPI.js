import axios from "axios";
import employerStore from "../../stores/employerStore.js";

const host = `${import.meta.env.VITE_API_HOST}/partTimer`;


const getEno = () => employerStore.getState().eno;

//내 근로자 리스트
export const getPartTimerList = async (page) => {

    const eno = getEno();  // eno 값을 가져와서 사용

    const pageValue = page || 1;

    const res = await axios.get(`${host}/list/${eno}?page=${pageValue}`);

    console.log(pageValue);

    return res.data.data;
}

//근로자 상세
export const readPartTimer = async (pno) => {

    const res = await axios.get(`${host}/read/${pno}`);

    return res.data.data;
}

//근로자 근태
export const getPartTimerWorkStatus = async (pno) => {

    const res = await axios.get(`${host}/workStatus/${pno}`);

    return res.data.data;
}

//내 지원자 리스트
export const getApplicantList = async (jpno, page) => {

    const pageValue = page || 1;

    const res = await axios.get(`${host}/applicant/list/${jpno}?page=${pageValue}`);

    console.log(res.data.data);

    return res.data.data;
}

//지원자 상세보기
export const readApplicant = async (jpano) => {

    const res = await axios.get(`${host}/applicant/read/${jpano}`);

    return res.data.data;
}

//근로자 이력 리스트
export const getPartTimerWorkHistoryList = async (pno, page) => {

    const pageValue = page || 1;

    const res = await axios.get(`${host}/workHistory/${pno}?page=${pageValue}`);

    return res.data.data;
}

//employer 별 총 급여 get
export const getTotalPay = async () => {

    const eno = getEno();  // eno 값을 가져와서 사용

    const res = await axios.get(`${host}/totalPay/${eno}`);

    return res.data.data;
}

//급여(연, 월 선택)
export const getPayByYearMonth = async (year, month) => {

    const eno = getEno();  // eno 값을 가져와서 사용

    const res = await axios.get(`${host}/payByYearMonth/${eno}?year=${year}&month=${month}`);

    return res.data.data;
}

//급여(연도만 선택)
export const getPayByYear = async (year) => {

    const eno = getEno();  // eno 값을 가져와서 사용

    const res = await axios.get(`${host}/payByYear/${eno}?year=${year}`);

    return res.data.data;
}

//급여 포함한 근로자 리스트
export const getPartTimerListWithPay = async (year, month, page) => {

    const eno = getEno();  // eno 값을 가져와서 사용

    const pageValue = page || 1;

    const res = await axios.get(`${host}/listWithPay/${eno}?year=${year}&month=${month}&page=${pageValue}`);

    return res.data.data;
}

export const JobApplicationAceept = async (jpano, status) => {

    const res = await axios.put(`${host}/applicant/accept?jpano=${jpano}&status=${status}`);

    return res.data;
}