import {Grid, Heading, Stack, Tag, Text, Wrap} from "@chakra-ui/react";
import {Twitter} from "../../../../chakra-ui/Icons/Twitter.jsx";
import {Facebook} from "../../../../chakra-ui/Icons/Facebook.jsx";
import {Github} from "../../../../chakra-ui/Icons/Github.jsx";

const Links = ({ links, name }) => {
    console.log(links)

    return (
        <Stack spacing={1.5}>
            <Heading fontSize='xl'>Info</Heading>

            <Grid templateColumns='1fr 2fr'>
                <Text fontSize='13px' color='gray.400'>Website</Text>

                <Wrap spacing={1.5}>
                    <Tag as='a' href={links.homepage[0]}>{name}.org</Tag>
                    <Tag>Whitepaper</Tag>
                </Wrap>
            </Grid>

            <Grid templateColumns='1fr 2fr' >
                <Text fontSize='13px' color='gray.400'>Community</Text>

                <Wrap spacing={1.5}>
                    <Tag as='a' href={`https://twitter.com/${links.twitter_screen_name}`} ><Twitter />Twitter</Tag>
                    <Tag as='a' href={`https://facebook.com/${links.facebook_username}`}><Facebook />Facebook</Tag>
                    {
                        links.official_forum_url[0]
                            ? <Tag as='a' href={links.official_forum_url[0]}>bitcointalk.org</Tag>
                            : <Tag as='a' href={links.subreddit_url}>Reddit</Tag>
                    }
                </Wrap>
            </Grid>

            <Grid templateColumns='1fr 2fr' >
                <Text fontSize='13px' color='gray.400'>Source Code</Text>

                <Wrap spacing={1.5}>
                    <Tag as='a' href={links.repos_url.github[0]}><Github /> Github</Tag>
                </Wrap>
            </Grid>
        </Stack>
    )
}

export default Links;