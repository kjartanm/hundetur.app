export async function onRequestPost(context) {
    try {
        let input = await context.request.formData();
        let pretty = JSON.stringify([...input], null, 2);

        let send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: 'kjartan.muller@udir.no', name: 'Kjartan' }],
                    },
                ],
                from: {
                    email: 'kjartan@muller.no',
                    name: 'Workers - MailChannels integration',
                },
                subject: 'Look! No servers',
                content: [
                    {
                        type: 'text/plain',
                        value: 'And no email service accounts and all for free too!',
                    },
                ],
            }),
        });

        let sendMail = await fetch(send_request);

        let resp = await sendMail.text();

        return new Response(resp, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });

    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}