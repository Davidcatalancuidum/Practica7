import {Sub, SubsResponseFromApi} from '../types';
import subsData from '../components/informacion.json'

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    return Promise.resolve(subsData);
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):
    Array<Sub> => {
    return apiResponse.map(subFromApi => {
        const {
        months: subMonths,
        profileUrl: avatar,
        nick,
        description,
        } = subFromApi

        return {
        nick, 
        description,
        avatar,
        subMonths,
        }
    })
}