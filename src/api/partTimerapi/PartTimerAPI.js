import axios from "axios";
import employerStore from "../../stores/employerStore.js";

const host = `${import.meta.env.VITE_API_HOST}/partTimer`;


const eno = employerStore.getState().eno;

// const eno = 31;

//내 근로자 리스트
export const getPartTimerList = async (page) => {

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
export const getApplicantList = async (page) => {

    const pageValue = page || 1;

    const res = await axios.get(`${host}/applicant/list/${eno}?page=${pageValue}`);

    console.log(res.data.data);

    return res.data.data;
}

//지원자 상세보기
export const readApplicant = async (jpano, pno) => {

    const res = await axios.get(`${host}/read/${jpano}/${pno}`);

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

    const res = await axios.get(`${host}/totalPay/${eno}`);

    return res.data.data;
}

//급여(연, 월 선택)
export const getPayByYearMonth = async (year, month) => {

    const res = await axios.get(`${host}/payByYearMonth/${eno}?year=${year}&month=${month}`);

    return res.data.data;
}

//급여(연도만 선택)
export const getPayByYear = async (year) => {

    const res = await axios.get(`${host}/payByYear/${eno}?year=${year}`);

    return res.data.data;
}

//급여 포함한 근로자 리스트
export const getPartTimerListWithPay = async (year, month) => {

    const res = await axios.get(`${host}/listWithPay/${eno}?year=${year}&month=${month}`);

    return res.data.data;
}