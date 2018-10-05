import { Track } from '@/models/track';
import axios from 'axios';
const api = 'https://localhost:5001/api';
export class TrackService {

  public getTracks() {
    return axios.get<Track[]>(`${api}/meetingtrack`);
  }
}

// Export a singleton instance in the global namespace
export const talkService = new TrackService();