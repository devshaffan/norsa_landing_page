import * as React from "react";
import { useTheme } from "@material-ui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TotalDailySalesReport from "./TotalDailySalesReport";
import checkUser, { getRole } from "../services/auth";
import { useNavigate } from "react-router-dom";


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function Reports() {
    const [value, setValue] = React.useState(0);

    const theme = useTheme();
    const matchesSM = null
    // useMediaQuery(theme.breakpoints.down("md"));

    React.useEffect(() => {
        if (parseInt(getRole()) == 1) {
            setValue(3);
        }
    }, []);

    const handleChange = (event, newValue) => {
        console.log("newValue: ", newValue);
        setValue(newValue);
    };
    return (
        <div>
            <div className="tab-main-flex ">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="tabs"
                    orientation={matchesSM ? "vertical" : undefined}
                    // className="tabs-flex"
                    // variant="fullWidth"
                    variant="scrollable"

                >
                    {
                        <Tab
                            label="Total Daily Sale Of Current User"
                            {...a11yProps(0)}
                            className="tab-styling"
                        />
                    }

                </Tabs>
            </div>
            {

                value == 0 ? <TotalDailySalesReport /> :
                    null
            }
        </div >
    );
}


