import CallApi from '../CallApi';
import Endpoints from '../../constants/Endpoints';

const Create = (ebook_id: number) => {
  const dataPost = {
    ebook_id,
  };
  return CallApi.AuthorizedHttpCall.post(Endpoints.urls.wishlist, dataPost);
};

const GetAll = () => {
  return CallApi.AuthorizedHttpCall.get(Endpoints.urls.wishlist);
};

const GetById = (id: number) => {
  return CallApi.AuthorizedHttpCall.get(Endpoints.urls.wishlist + '/' + id);
};

const DeleteById = (id: number) => {
  return CallApi.AuthorizedHttpCall.delete(Endpoints.urls.wishlist + '/' + id);
};

export default {
  Create,
  GetAll,
  GetById,
  DeleteById,
};
