const Request = () => {
    const getData = async (message) => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("in", `${message}`);
        encodedParams.append("op", "in");
        encodedParams.append("cbot", "1");
        encodedParams.append("SessionID", "RapidAPI1");
        encodedParams.append("cbid", "1");
        encodedParams.append("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
        encodedParams.append("ChatSource", "RapidAPI");
        encodedParams.append("duration", "1");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '4ebb2a8ae0msh8a39e3791f7978ap1b7249jsn24de1c1d7e91',
                'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
            },
            body: encodedParams
        };


        const res = await fetch('https://robomatic-ai.p.rapidapi.com/api', options);
        return await res.json();
    }

    return { getData };
}

export default Request;