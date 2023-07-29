import { TYPE, categories, videos } from '../utils/constants';
import { v4 as uuid } from 'uuid';

const localWatchLater = localStorage.getItem('watchLater');
const localPlaylists = localStorage.getItem('playlist');
const localNotes = localStorage.getItem('notes');

export const dataInitialState = {
  categories: categories,
  videos: videos,
  watchLater: localWatchLater ? JSON.parse(localWatchLater) : [],
  playlist: localPlaylists ? JSON.parse(localPlaylists) : [],
  notes: localNotes ? JSON.parse(localNotes) : [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case TYPE.Get_ALL_CATEGORY: {
      return {
        ...state,
        categories: [...action.payload],
      };
    }
    case TYPE.GET_ALL_VIDEOS: {
      return {
        ...state,
        videos: [...action.payload],
      };
    }
    case TYPE.ADD_TO_WATCH_LATER: {
      const newWatchLater = [...state.watchLater, action.payload];
      localStorage.setItem('watchLater', JSON.stringify(newWatchLater));
      return {
        ...state,
        watchLater: newWatchLater,
      };
    }
    case TYPE.REMOVE_FROM_WATCH_LATER: {
      const newWatchLater = state.watchLater.filter(
        video => video._id !== action.payload._id
      );
      localStorage.setItem('watchLater', JSON.stringify(newWatchLater));
      return {
        ...state,
        watchLater: newWatchLater,
      };
    }

    case TYPE.CREATE_NEW_PLAYLIST: {
      const newPlaylist = {
        id: uuid(),
        name: action.payload,
        videos: [],
      };
      const updatedPlaylists = [...state.playlist, newPlaylist];
      localStorage.setItem('playlist', JSON.stringify(updatedPlaylists));
      return {
        ...state,
        playlist: updatedPlaylists,
      };
    }
    case TYPE.DELETE_PLAYLIST: {
      const updatedPlaylists = state.playlist.filter(
        pl => pl.id !== action.payload
      );
      localStorage.setItem('playlist', JSON.stringify(updatedPlaylists));
      return {
        ...state,
        playlist: updatedPlaylists,
      };
    }
    case TYPE.ADD_TO_PLAYLIST: {
      const { playlistId, video } = action.payload;
      const updatedPlaylists = state.playlist.map(playlist =>
        playlist.id === playlistId
          ? { ...playlist, videos: [...playlist.videos, video] }
          : playlist
      );
      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
      return { ...state, playlist: updatedPlaylists };
    }
    case TYPE.REMOVE_FROM_PLAYLIST: {
      const { playlistId, videoId } = action.payload;
      const updatedPlaylists = state.playlist.map(playlist =>
        playlist.id === playlistId
          ? {
              ...playlist,
              videos: playlist.videos.filter(video => video._id !== videoId),
            }
          : playlist
      );
      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
      return { ...state, playlist: updatedPlaylists };
    }
    case TYPE.ADD_NOTE: {
      const newNotes = [...state.notes, action.payload];
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return {
        ...state,
        notes: newNotes,
      };
    }

    case TYPE.UPDATE_NOTE: {
      const updatedNotes = state.notes.map(note =>
        note.id === action.payload.id
          ? { ...note, text: action.payload.text }
          : note
      );
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return {
        ...state,
        notes: updatedNotes,
      };
    }

    case TYPE.DELETE_NOTE:{
        const updatedNotes = state.notes.filter(note => note.id !== action.payload);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        return {
          ...state,
          notes: updatedNotes,
        };
    }
    default:
      return;
  }
};
