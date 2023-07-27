import { Link } from 'react-router-dom'

import { Sidebar as Side } from 'flowbite-react'
import { HiViewGrid, HiInbox, HiAdjustments } from 'react-icons/hi'

const CATEGORIES = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
]

const DEMO_CATEGORIES = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
  { label: 'Anime', value: 'anime' },
]

export const Sidebar = () => {
  return (
    <Side color="gray" className="w-full">
      <Side.Items>
        <Side.ItemGroup>
          <Side.Item icon={HiViewGrid}>
            <p>Dashboard</p>
          </Side.Item>
          <Side.Collapse open icon={HiAdjustments} label="Categories">
            {CATEGORIES?.map(({ value, label }) => (
              <Side.Item as={Link} key={value} to={`movies/${value}`}>
                {label}
              </Side.Item>
            ))}
          </Side.Collapse>

          <Side.Collapse icon={HiAdjustments} label="Genres">
            {DEMO_CATEGORIES?.map(({ value, label }) => (
              <Side.Item as={Link} key={value} to={`movies/${value}`}>
                {label}
              </Side.Item>
            ))}
          </Side.Collapse>
          <Side.Item icon={HiInbox}>
            <p>Inbox</p>
          </Side.Item>
        </Side.ItemGroup>
      </Side.Items>
    </Side>
  )
}
