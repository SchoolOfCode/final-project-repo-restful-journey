
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsApple} from "react-icons/bs";

function Timeline() {
return (
    <div>
    <VerticalTimeline>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>January</h1> 
           <p>Apple, Beetroot, Brussel Sprouts, Cauliflower, Celeriac, Celery, Chicory, Horseradish, Jerusalem Artichoke, Kale, Kohlrabi, Leeks, Parsnips, Pear, Potatoes, Rhubarb, Salsify, Shallots, Swede, Turnips</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <h1>February</h1> 
           <p>Brussel Sprouts, Cauliflower, Beetroot, Celeriac, Chicory, Jerusalem Artichoke, Kale, Kohlrabi, Leeks, Parsnips, Potatoes, Purple Sprouting Broccoli, Rhubarb, Salsify, Shallots, Swede, Turnips</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <h1>March</h1> 
           <p>Cauliflower, Kale, Leeks, Purple Sprouting Broccoli, Rhubarb, Salsify, Spinach, Spring onions, Swede, Wild Nettles, Wild Garlic</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>April</h1> 
           <p>Asparagus, Basil, Broccoli, Chives, Dill, Jersey Royal New Potatoes, Lettuce & Salad Leaves, New Potatoes, Purple Sprouting Broccoli, Radishes, Rhubarb, Rocket, Samphire, Sorrel, Spinach, Spring Onions, Watercress, Wild Nettles, Wild Garlic</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>May</h1> 
           <p>Asparagus, Basil, Broccoli, Carrots, Chervil, Chives, Coriander, Dill, Jersey Royal and New Potatoes, Lettuce and Salad Leaves, Mint, Nasturtium, New Potatoes, Parsley, Oregano, Peas, Radishes, Rhubarb, Rocket, Rosemary, Sage, Samphire, Sorrel, Spinach, Spring Onions, Tarragon, Watercress, Wild Nettles, Wild Garlic</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>June</h1> 
           <p>Artichoke, Asparagus, Aubergine, Basil, Beetroot, Bilberries, Blueberries, Broad Beans, Broccoli, Carrots, Chard, Cherries, Chervil, Chillies, Chives, Coriander, Courgettes, Dill, Elderflowers, Fennel, French Beans, Garlic, Gooseberries, Greengages, Jersey Royal New Potatoes, Kohlrabi, Lettuce & Salad Leaves, Mangetout, Mint, Nasturtium, New Potatoes, Onions, Oregano, Pak Choi, Parsley, Peas, Radishes, Rocket, Rosemary, Runner Beans, Sage, Samphire, Sorrel, Spinach, Spring Onions, Strawberries, Tarragon, Thyme, Tomatoes, Turnips, Watercress, Wild Nettles</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>July</h1> 
           <p>Artichoke, Aubergine, Basil, Beetroot, Bilberries, Blackcurrants, Blueberries, Broad Beans, Broccoli, Carrots, Chard, Chervil, Chillies, Cherries, Chives, Coriander, Courgettes, Dill, Elderflower, Fennel, French Beans, Garlic, Gooseberries, Greengages, Jersey Royal New Potatoes, Kohlrabi, Lettuce & Salad Leaves, Mangetout, Mint, Nasturtium, New Potatoes, Onions, Oregano, Pak Choi, Parsley, Peas, Radishes, Rocket, Rosemary, Runner Beans, Sage, Samphire, Shallots, Sorrel, Spinach, Spring Onions, Strawberries, Tarragon, Thyme, Tomatoes, Turnips, Watercress, Wild Nettles </p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>August</h1> 
           <p>Artichoke, Aubergine, Basil, Beetroot, Bilberries, Blueberries, Broad Beans, Broccoli, Carrots, Chard, Cherries, Chillies, Chives, Coriander, Courgettes, Cucumber, Damsons, Fennel, Greengages, French Beans, Garlic, Kohlrabi, Lettuce, Loganberries, Mangetout, Marrow, Mint, Onions, Oregano, Pak Choi, Parsley, Peas, Peppers, Plums, Potatoes (maincrop), Radishes, Raspberries, Redcurrants, Rocket, Rosemary, Runner Beans, Sage, Shallots, Sorrel, Spring Onions, Strawberries, Sweetcorn, Tarragon, Thyme, Tomatoes, Turnips, Watercress, Wild Mushrooms</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>September</h1> 
           <p>Apples, Artichoke, Aubergine, Beetroot, Bilberries, Blackberries, Broccoli, Butternut Squash, Carrots, Celeriac, Celery, Chard, Chestnuts, Chillies, Chives, Cob Nuts, Coriander, Courgettes, Cucumber, Damsons, Elderberries, Fennel, French Beans, Garlic, Horseradish, kale, kohlrabi, leeks, lettuce & salad leaves, mangetout, marrow, mint, onions, oregano, pak choi, parsley, pears, peppers, plums, potatoes, pumpkin, radishes, raspberries, redcurrants, rocket, rosemary, runner beans, sage, shallots, sorrel, spring onions, sweetcorn, thyme, tomatoes, turnips, watercress, wild mushrooms</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>October</h1> 
           <p>apples, artichoke, beetroot, bilberries, blackberries, broccoli, butternut squash, celeriac, celery, chestnuts, chicory, chives, chillies, cob nuts, elderberries, fennel, garlic, horseradish, Jerusalem artichoke, kale, kohlrabi, leeks, lettuce, marrow, medlar, parsley, parsnips, pears, potatoes, pumpkin, quince, radishes, rocket, rosemary, runner beans, sage, salsify, shallots, sorrel, squashes, swede, sweetcorn, thyme, tomatoes, turnips, watercress, wild mushrooms</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>November</h1> 
           <p>apples, artichoke, beetroot, butternut squash, cauliflower, celeriac, celery, chestnuts, chicory, cob nuts, horseradish, Jerusalem artichoke, kale, kohlrabi, leeks, parsnips, pears, potatoes, pumpkin, quince, rosemary, sage, salsify, shallots, swede, turnips, watercress, wild mushrooms</p>
           </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<BsApple />} iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
           <div style={{width:"70vw", background:"red"}}>
           <h1>December</h1> 
           <p>apples, beetroot, brussels sprouts, cauliflower, celeriac, celery, chestnuts, chicory, horseradish, Jerusalem artichoke, kale, kohlrabi, leeks, parsnips, pears, potatoes, salsify, shallots, swede, turnips, wild mushrooms</p>
           </div>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
)
}



export default Timeline;



  