import Clouds from "@/components/Clouds";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Navbar";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import { useEffect, useState } from "react";
import search from "../images/search.svg";

const table = [
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  },
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  },
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  },
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  },
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  },
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  },
  {
    user: "jennderfer",
    tweets: "27",
    views: "482, 290",
    score: "22870"
  },
  {
    user: "MRudol123",
    tweets: "29",
    views: "324, 768",
    score: "22870"
  },
  {
    user: "ARudo1v03905",
    tweets: "10",
    views: "282, 815",
    score: "22870"
  },
  {
    user: "Abrajgame90vo00",
    tweets: "05",
    views: "856, 120",
    score: "22870"
  },
  {
    user: "tasrifkhanbsf",
    tweets: "30",
    views: "122, 200",
    score: "22870"
  }
];

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#0E485C',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#337389',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function Highscores() {
  const [switchOn, setSwitchOn] = useState(false);
  const handleChange = () => {
    setSwitchOn(!switchOn);
  }
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState(table);
  const [airdropData, setairdropData] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredData = tableData.filter(t =>
        t.user.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setTableData(filteredData);
    } else {
      // Reset to initial table data or handle accordingly
    }
  }, [debouncedSearchTerm, tableData]);

  const getLeaderBoardInfos = async () => {
    try {
      const response = await fetch('https://frenfind-6b3d86bd2f7d.herokuapp.com/api/get-leaderboard');
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      const data = await response.json();
      setairdropData(data)
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLeaderBoardInfos();
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen pt-10">
        <Clouds />
        <Nav />
        <MobileNav />
        <div className="pt-16 max-w-[794px] mx-auto w-full z-[3] relative">
          <h2 className="text-[20px] md:text-[32px] font-krona tracking-[0.64px] text-center mb-6">AIRDROP</h2>
          <p className="max-w-[540px] text-white font-body leading-[140%] mb-6 text-center mx-auto px-5">
            Create content about Frenz. More views equals more $Frenz. Leaderboard is updated every 30 minutes. <a href="" target="_blank" rel="noreferrer" className="text-yellow underline">Learn More</a> or <a href="" target="_blank" rel="noreferrer" className="text-yellow underline">Tweet Now</a>
          </p>
          <div className="flex items-center justify-center gap-5">
            <span className={`text-[24px] font-bodymed ${switchOn ? "text-[#FFFFFF]" : "text-[#004157]"}`}>Airdrop</span>
            <FormControlLabel
              sx={{
                m: 0
              }}
              control={<IOSSwitch checked={switchOn} onChange={handleChange} />}
            />
            <span className={`text-[24px] font-bodymed ${switchOn ? "text-[#004157]" : "text-[#FFFFFF]"}`}>Frenzdrop</span>
          </div>
          <div className="mt-10 px-5">
            <div className="bg-[#444444]/5 backdrop-blur-[16px] rounded-[12px] overflow-auto">
              <div className="flex items-center pl-[35px] pr-5 pt-5 pb-[14px] justify-between min-w-[650px]">
                <h2 className="text-[24px] font-krona tracking-[0.48px]">LEADERBOARD</h2>
                <div className="relative px-6 py-4 flex items-center max-w-[312px] w-full rounded-[8px] border border-white/30">
                  <Image src={search} alt="" />
                  <input
                    placeholder="Search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent text-white text-[16px] leading-[140%] font-body placeholder:text-white ml-2 outline-0 border-0">
                  </input>
                </div>
              </div>
              {switchOn ? <>
                <div className="flex w-full items-center justify-between py-4 bg-[#2099C4] rounded-[6px]  min-w-[650px]">
                  <div className="text-[20px] text-center font-krona w-4/12">RANK</div>
                  <div className="text-[20px] text-center font-krona w-4/12">USER</div>
                  <div className="text-[20px] text-center font-krona w-4/12">SCORE</div>
                </div>
                <div className="flex flex-col w-full mb-10">
                  {airdropData.data.map((t, i) => (
                    <div key={i} className={`flex items-center py-4 ${i !== airdropData.data.length - 1 && "border-b-[2px] border-white/20"}  min-w-[650px]`}>
                      <div className="text-[16px] font-body text-center w-4/12">{i + 1}</div>
                      <div className="text-[16px] font-body text-center w-4/12">{t.name}</div>
                      <div className="text-[16px] font-body text-center w-4/12">{t.score}</div>
                    </div>
                  ))}
                  {tableData.length === 0 &&
                    <div className={`flex items-center py-4`}>
                      <div className="text-[16px] font-body text-center w-full">No entry found.</div>
                    </div>
                  }
                </div>
              </> : <>
                <div className="flex items-center justify-between py-4 bg-[#2099C4] rounded-[6px]  min-w-[650px]">
                  <div className="text-[20px] text-center font-krona w-2/12">RANK</div>
                  <div className="text-[20px] text-center font-krona w-3/12">USER</div>
                  <div className="text-[20px] text-center font-krona w-2/12">TWEETS</div>
                  <div className="text-[20px] text-center font-krona w-2/12">VIEWS</div>
                  <div className="text-[20px] text-center font-krona w-3/12">SCORE</div>
                </div>
                <div className="flex flex-col w-full mb-10">
                  {tableData.map((t, i) => (
                    <div key={i} className={`flex items-center py-4 ${i !== tableData.length - 1 && "border-b-[2px] border-white/20"}  min-w-[650px]`}>
                      <div className="text-[16px] font-body text-center w-2/12">{i + 1}</div>
                      <div className="text-[16px] font-body text-center w-3/12">{t.user}</div>
                      <div className="text-[16px] font-body text-center w-2/12">{t.tweets}</div>
                      <div className="text-[16px] font-body text-center w-2/12">{t.views}</div>
                      <div className="text-[16px] font-body text-center w-3/12">{t.score}</div>
                    </div>
                  ))}
                  {tableData.length === 0 &&
                    <div className={`flex items-center py-4`}>
                      <div className="text-[16px] font-body text-center w-full">No entry found.</div>
                    </div>
                  }
                </div>
              </>}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
