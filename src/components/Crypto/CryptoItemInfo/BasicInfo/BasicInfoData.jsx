import {Box, Divider, Text} from "@chakra-ui/react";

const BasicInfoData = ({ name, data }) => {
    const boxStyles = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    const titleStyles = {
        fontSize: '13px',
        color: 'gray.400'
    }

    const infoStyles = {
        fontSize: '13px',
        fontWeight: 'bold'
    }

    return (
        <Box>
            <Box sx={boxStyles}>
                <Text sx={titleStyles}>{ name }</Text>
                <Text sx={infoStyles}>
                    ${data.toLocaleString('en-US')}
                </Text>
            </Box>
            <Divider mt={2} orientation='horizontal' />
        </Box>
    )
}

export default BasicInfoData;