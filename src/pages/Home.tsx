// TODO: height: 240px 은 테스트용이므로 나중에 지우기
export default function Home() {
    return (
        <div style={{ height: 'calc(100vh - 140px)', overflowY: 'auto', paddingLeft: '40px', padding: '20px 40px', display: 'grid', rowGap: '24px' }}>
            {/* All, Music, Podcasts */}
            <div style={{ height: '40px', display: 'flex', columnGap: '8px', alignItems: 'center' }}>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>All</div>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>Music</div>
                <div style={{ border: '1px solid #818181', borderRadius: '9999px', padding: '4px 12px' }}>Podcasts</div>
            </div>

            {/* 타일 8개 */}
            <div style={{ display: 'grid' }}>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>eAeon</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>Liked Songs</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>ALLDAY PROJECT</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>Mac Ayres</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>K-Pop Today (Japan)</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>2IGHT</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>G.Soul</div>
                    </div>
                </div>
                <div style={{ display: 'block', borderRadius: '4px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            backgroundImage: 'url(https://i.scdn.co/image/ab6761670000ecd430d8fcf55dc435d96a663f43)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '48px',
                            height: '48px'
                        }}></div>
                        <div>Victoria Monet</div>
                    </div>
                </div>
            </div>

            {/* Made For Mina Kim */}

            <div>Made For Mina Kim</div>
            <div style={{ height: '250px', overflowX: 'auto', overflowY: 'hidden' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>


            {/* Jump back in */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* Recently played */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* New releases for you */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* Your top mixes */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* Recommended for today */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* Your favorite artists */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* Based on your recent listening */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* Albums featuring songs you like */}
            <div style={{ height: '250px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                    <div style={{ width: '200px' }}>
                        <div>앨범</div>
                        <div>설명</div>
                    </div>
                </div>
            </div>

            {/* K-Indie,Rock & Various Genres */}
        </div>
    );
}