import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

interface SearchBarProps {
  placeholder: any;
  searchBarWidth: any;
}

const SearchBar = ({ placeholder, searchBarWidth } : SearchBarProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                sx={{width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
        </Box>
    )
}

export default SearchBar
