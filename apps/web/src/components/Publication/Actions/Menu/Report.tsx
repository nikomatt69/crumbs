import { Menu, MenuItem } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import type { AnyPublication } from '@lensshare/lens';
import stopEventPropagation from '@lensshare/lib/stopEventPropagation';
import cn from '@lensshare/ui/cn';
import type { FC } from 'react';
import { useGlobalModalStateStore } from 'src/store/non-persisted/useGlobalModalStateStore';


interface ReportProps {
  publication: AnyPublication;
}

const Report: FC<ReportProps> = ({ publication }) => {
  const { setShowPublicationReportModal } = useGlobalModalStateStore();

  return (
    <MenuItem
      as="div"
      className={({ active }) =>
        cn(
          { 'dropdown-active': active },
          'm-2 block cursor-pointer rounded-lg px-2 py-1.5 text-sm text-red-500'
        )
      }
      onClick={(event: any) => {
        stopEventPropagation(event);
        setShowPublicationReportModal(true, publication.id);
      }}
    >
      <div className="flex items-center space-x-2">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <div>Report post</div>
      </div>
    </MenuItem>
  );
};

export default Report;
