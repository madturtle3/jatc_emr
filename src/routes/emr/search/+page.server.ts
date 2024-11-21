import type { PageServerLoad } from './$types';

export interface PersonResult {

    firstName: string,
    lastName: string,
    phone: string,
    chartnum: number,
    dob: Date

}

export interface SearchResult {
    result: string
    people: PersonResult[]
}

export const load: PageServerLoad = async ({ url }) => {
    let retval = {
        result: "not implemented yet...",
        people: new Array<PersonResult>
    } satisfies SearchResult
    for (const [key, value] of url.searchParams) {
        if (["fname", "lname", "phone", "chart", "dob"].includes(key) && value.length > 0) {
            /*we query the database here, eventually*/
            for (let index = 0; index < 5; index++) {
                retval.people.push({
                    firstName: "John",
                    lastName: "Harry",
                    phone: Math.floor(Math.random()*10).toString(),
                    chartnum: Math.floor(Math.random()*10),
                    dob: new Date("12/16/1924")
                });
            }
        }
    }

    return retval;
};